import { Handlers } from "https://deno.land/x/fresh@1.1.5/server.ts";
import IconCurrencyBitcoin from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/currency-bitcoin.tsx";
type Props = {
  active: string;
};

export const handler:Handlers<Props> = {
    GET(req, ctx) {
        const path = new URL(req.url);
        return ctx.render({ active: req.url});
    }
}


export default function Header({ active }: Props) {
  const menus = [
    { name: "Home", href: "/" },
    { name: "Cash", href: "/cash" },
    { name: "Staking", href: "/staking" },
    { name: "Defi", href: "/defi" },
  ];

  return (
    <div class="bg-white w-full max-w-screen-lg py-6 px-8 flex flex-col md:flex-row gap-6">
      <div class="flex items-center flex-1">
        <IconCurrencyBitcoin color="blue" />
        <div class="text-2xl ml-1 font-bold">
          Akasha
        </div>
      </div>
      <ul class="flex items-center gap-6">
        {menus.map((menu) => (
          <li>
            <a
              href={menu.href}
              class={"text-gray-500 hover:text-gray-700 py-1 border-gray-500" +
                (menu.href === active ? " font-bold border-b-2" : "")}
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
