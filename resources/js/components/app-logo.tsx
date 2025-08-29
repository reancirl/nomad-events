import AppLogoIcon from './app-logo-icon';

export default function AppLogo() {
    return (
        <>
        {/* #5b21a2 */}
            <div className="flex aspect-square size-8 items-center justify-center rounded-md bg-primary text-white">
                {/* <AppLogoIcon className="size-5 fill-current text-white dark:text-black" /> */}
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-tight font-semibold">Nomad Production</span>
            </div>
        </>
    );
}
