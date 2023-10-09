const MenuShimmer = () => {
    const rows= [1,2,3];
    return (
        <div className="mx-40 my-8">
            <div className="p-4">
                <div className="flex justify-between mb-4">
                    <div>
                        <div className="w-[8rem] h-6 bg-slate-200 mb-2"></div>
                        <div className="w-[6rem] h-4 bg-slate-200 mb-2"></div>
                        <div className="w-[8rem] h-4 bg-slate-200"></div>
                    </div>
                    <div className="w-[5rem] bg-slate-200 rounded-lg h-18"></div>
                </div>
                <hr className="border-b border-dashed"/>
                <div className="my-4 flex">
                    <div className="w-[5rem] h-6 bg-slate-200 mr-6"></div>
                    <div className="w-[6rem] h-6 bg-slate-200"></div>
                </div>
                <div className="w-[4rem] h-6 bg-slate-200 flex m-auto"></div>
            </div>
            {rows.map(i=>
                <div key={i}>
                    <hr className="border-b mt-6 mb-2"></hr> 
                    <div className="py-2 flex justify-between">
                        <div className="w-[15rem] h-8 bg-slate-200 mb-2"></div>
                        <div className="w-[1rem] h-4 bg-slate-200 mb-2"></div>
                    </div>
                    <div className="flex justify-between py-4">
                        <div>
                            <div className="w-[1rem] h-4 bg-slate-200 mb-1"></div>
                            <div className="w-[10rem] h-4 bg-slate-200 mb-1"></div>
                            <div className="w-[4rem] h-3 bg-slate-200 mb-1"></div>
                            <div className="w-[20rem] h-2 bg-slate-200"></div>
                        </div>
                        <div className="w-[8rem] h-[6rem] bg-slate-200 rounded-lg">
                        </div>
                    </div>
                </div>
            )}
            
        </div>
    )
}

export default MenuShimmer;