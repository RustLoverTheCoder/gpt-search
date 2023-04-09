export const SearchSection = () => {
    return (
        <section className="px-4 md:px-0 py-12 md:pt-36 mt:pb-10">
            <div className="md:max-w-4xl lg:max-w-7xl text-center mx-auto w-11/12 mb-10">
                <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 max-w-4xl mx-auto font-bold">
                    GPT Search
                </h1>
                <div className="mt-10 md:flex items-center max-w-lg mx-auto">
                    <form className="w-full relative" action="/search" autoComplete="off" method="GET" role="search">
                        <input
                            type="text"
                            name="q"
                            placeholder="搜索"
                            className="input w-full max-w-lg p-4 placeholder-zinc-400 bg-white dark:bg-zinc-800 rounded-md appearance-none text-sm border-transparent"
                        />
                    </form>
                </div>
            </div>
        </section>
    );
};
