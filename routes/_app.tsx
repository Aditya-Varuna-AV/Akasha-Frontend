
import { Head } from "$fresh/runtime.ts";
import Footer from "../islands/Footer.tsx";
import Header from "../islands/Header.tsx";

// deno-lint-ignore no-explicit-any
export default function App({ Component } : any) {
    return (
        <html data-custom="data">
            <Head>
                <title>Akasha</title>
            </Head>
            <body class="bodyClass">
                <Header active={Component().props.route as string} />
                <Component />
                <Footer/>
            </body>
        </html>
    );
}