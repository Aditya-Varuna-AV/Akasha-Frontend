import { JSX } from "preact";
import { Handlers } from "https://deno.land/x/fresh@1.1.5/server.ts";

enum CashFlowType {
    WITHDRAW = "Withdraw",
    DEPOSIT = "Deposit"
}


class CashFlow {
    currency!: string;
    amount!: number;
    cashFlowType!: CashFlowType;
}

export const handler: Handlers<CashFlow> =  {
    POST(req, ctx) {
        const url = new URL(req.url);
        return ctx.render();
    }
}

export default function CashForm(props: JSX.HTMLAttributes<HTMLInputElement>) {
    return (
        <div>
            <form class= "flex flex-col gap-4 w-full">
                <div class="flex flex-col gap-2 w-full">
                    <label class="text-gray-800" for="currency">Currency</label>
                    <select id="currency" name="currency" class="border border-gray-300 rounded-md">
                        <option value="bitcoin">SDG</option>
                        <option value="ethereum">MYR</option>
                    </select>
                </div>

                <div class="flex flex-col gap-2 w-full">
                    <label class="text-gray-700" for="amount">Amount</label>
                    <input type="number" name="amount" min="0.00" step="0.01" value="0.00" class="border border-gray-300 rounded-md" />
                </div>

                <div class="flex flex-col gap-2 w-full">
                    <label class="text-gray-700" for="cashFlowType">Cash Flow Type</label>
                    <select id="cashFlowType" name="cashFlowType" class="border border-gray-300 rounded-md">
                        <option value={CashFlowType.DEPOSIT}>{CashFlowType.DEPOSIT}</option>
                        <option value={CashFlowType.WITHDRAW}>{CashFlowType.WITHDRAW}</option>
                    </select>
                </div>

                <div class="grid grid-cols-2 gap-10 content-around">
                    <button type="submit" class="rounded-full bg-blue-400 hover:bg-blue-600">Add</button>
                    <button class="rounded-full bg-pink-400 hover:bg-pink-600">Cancel</button>
                </div>
            </form>

        </div>
    );
}