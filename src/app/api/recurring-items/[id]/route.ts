import { NextResponse } from "next/server";
import { updateRecurringItem } from "@/application/recurring-item/update-recurring-item";
import { RecurringItemValidationError } from "@/domain/recurring-item/errors";
import type { CreateRecurringItemInput } from "@/domain/recurring-item/model";

export async function PATCH(request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const payload = (await request.json()) as CreateRecurringItemInput;
    const { id } = await context.params;

    const item = await updateRecurringItem(id, payload);
    return NextResponse.json({ id: item.id }, { status: 200 });
  } catch (error) {
    if (error instanceof RecurringItemValidationError) {
      return NextResponse.json({ error: error.message, fieldErrors: error.fieldErrors }, { status: 400 });
    }

    const message = error instanceof Error ? error.message : "Unbekannter Fehler";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
