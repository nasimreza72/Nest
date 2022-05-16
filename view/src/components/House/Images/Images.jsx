import "./Images.scss";
export const Images=()=>{
    return(
        <div className=" flex justify-center mt-5">
            <div className="flex">
                <div className="w-full mr-3 lg:w-1/2">
                    <img className="rounded-l-lg xl:h-[24rem]" src="https://a0.muscache.com/im/pictures/8a4568c9-4b46-4bac-8e15-3a3b53707472.jpg?im_w=1200" alt="" />
                </div>
                <div className="hidden lg:w-1/2 lg:block">
                    <div className="flex">
                        <div className="mr-3 mb-3"><img src="https://a0.muscache.com/im/pictures/9dd13789-8644-436d-af02-ff1920ca269a.jpg?im_w=720" alt="" /></div>
                        <div><img className=" rounded-r-lg" src="https://a0.muscache.com/im/pictures/07431e42-dd3a-446f-b583-07a61e29a73b.jpg?im_w=720" alt="" /></div>
                    </div>
                    <div className="flex">
                        <div className="mr-3"><img src="https://a0.muscache.com/im/pictures/11c3d235-6256-4a0d-91a3-ea478836c9e6.jpg?im_w=720" alt="" /></div>
                        <div><img className=" rounded-r-lg" src="https://a0.muscache.com/im/pictures/70efc7b7-afc9-4583-97bb-5079e6591c64.jpg?im_w=720" alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}