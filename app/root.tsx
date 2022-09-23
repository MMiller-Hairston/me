import type { MetaFunction } from '@remix-run/node';
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from '@remix-run/react';

import appStyles from './styles/app.css';

export const meta: MetaFunction = () => ({
    charset: 'utf-8',
    title: 'Michael Miller-Hairston',
    viewport: 'width=device-width,initial-scale=1',
});

export function links() {
    return [{ rel: 'stylesheet', href: appStyles }];
}

export default function App() {
    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
            </head>
            <body className="m-0 p-0 h-full">
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}
