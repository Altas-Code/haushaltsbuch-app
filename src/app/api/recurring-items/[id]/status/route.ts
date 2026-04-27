import { NextResponse } from "next/server";
import { setRecurringItemStatus } from "@/application/recurring-item/set-recurring-item-status";
import type { RecurringItemStatus } from "@/domain/recurring-item/model";

export async function PATCH(request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const payload = (await request.json()) as { status: RecurringItemStatus };
    const { id } = await context.params;

    const item = await setRecurringItemStatus(id, payload.status);
    return NextResponse.json({ id: item.id, status: item.status }, { status: 200 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unbekannter Fehler";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
