const ShimmerUI = () => {
    const rows = [1,2,3,4,5,6,7,8];

    return (
        <div className="flex flex-wrap mx-6 my-4 justify-center" data-testid="shimmer-ui">
            {rows.map((i)=>(
                <div key={i} className="flex flex-col w-72 border-2 m-4 p-4">
                    <div className="bg-slate-200 w-64 h-40"></div>
                    <div className="mt-4 w-24 h-4 bg-slate-200"></div>
                    <div className="mt-2 w-64 h-4 bg-slate-200"></div>
                    <div className='flex justify-between mt-4'>
                        <div className="w-12 h-6 bg-slate-200"></div>
                        <div className="w-12 px-2 h-6 bg-slate-200"></div>
                        <div className="w-24 h-6 bg-slate-200"></div>
                    </div>
                </div>
            ))}
        </div>
    )
        
}

export default ShimmerUI;