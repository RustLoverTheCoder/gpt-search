export const Header = () => {
    return (
        <div className="sticky top-0 z-50">
            <header className="p-4 md:px-6 bg-zinc-100 dark:bg-zinc-900 backdrop-blur-sm bg-opacity-75 border-b tbc">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <a
                            className="relative hover:no-underline w-auto flex items-center font-semibold text-xl"
                            href="/"
                        >
                            GPT Search
                        </a>
                        <nav className="ml-6 hidden md:block">
                            <ul className="flex items-center">
                            </ul>
                        </nav>
                    </div>
                    <div className="flex items-center">
                        <div>
                            <div className="flex">
                                <div className="hidden lg:flex ml-2 items-center">
                                    <a className="font-medium ml-4 text-zinc-800 text-sm hover:text-pink-500 transition-colors dark:text-white">
                                        登录
                                    </a>
                                </div>
                                <span className="hidden lg:inline-block ml-6">
                                    <a className="px-5 py-3 text-sm text-white dark:text-white font-medium dark:bg-zinc-700 bg-zinc-800 rounded-md flex items-center hover:bg-indigo-600 transition-colors">
                                        注册
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};
