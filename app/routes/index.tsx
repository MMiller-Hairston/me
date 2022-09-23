import { EnvelopeIcon, DocumentCheckIcon } from '@heroicons/react/24/outline';

export default function Index() {
    return (
        <main className="max-w-7xl mx-auto" id="main">
            <section className="h-screen">
                <div className="grid justify-center gap-4 items-center pt-40 px-4">
                    <h1 className="text-3xl font-bold">
                        Michael Miller-Hairston
                    </h1>
                    <p>Father / Software Engineer / Tinkerer</p>
                    <p className="font-semibold">
                        Arizona based Software Engineer{' '}
                        <a
                            href="https://www2.deloitte.com/us/en.html"
                            className="underline"
                        >
                            @Deloitte
                        </a>
                        .
                    </p>
                    <div className="flex justify-center gap-6">
                        <a href="#skills">
                            <span title="Skills">
                                <DocumentCheckIcon className="h-6 w-6" />
                            </span>
                        </a>
                        <a href="mailto:michael.millerhairston@gmail.com">
                            <span title="Email">
                                <EnvelopeIcon className="h-6 w-6" />
                            </span>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
