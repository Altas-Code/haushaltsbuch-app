import { NextResponse } from "next/server";
import { createRecurringItem } from "@/application/recurring-item/create-recurring-item";
import type { CreateRecurringItemInput } from "@/domain/recurring-item/model";

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as CreateRecurringItemInput;

    const item = await createRecurringItem(payload);
    return NextResponse.json({ id: item.id }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unbekannter Fehler";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
