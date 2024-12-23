import { Navbar } from "./_components/navbar";

const MarketingLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return ( 
        <div className="min-h-full dark:bg-[#121212]">
            <Navbar />
            <main className="h-full pt-40">
                {children}
            </main>  
        </div>
     );
}
 
export default MarketingLayout;