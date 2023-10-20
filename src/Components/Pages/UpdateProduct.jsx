import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
    const product = useLoaderData()

    const { brand, name, photo, price, _id, rating, description, type } = product


    const handleUpdateProduct = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const brand = form.brand.value
        const price = form.price.value
        const description = form.description.value
        const rating = form.rating.value
        const photo = form.photo.value
        const type = form.type.value

        const updatedProduct = { name, brand, price, description, rating, photo, type }
        console.log(updatedProduct);

        fetch(`https://assignment-10-server-lp82chnbt-romans-projects-caf8547b.vercel.app/products/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedProduct),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    }

    return (
        <>
            <div className="pb-32 pt-16" >
                <div className="bg-[#F4F3F0] lg:max-w-4xl md:max-w-2xl mx-auto">
                    <div className="lg:mx-32 pt-10 md:mx-16">
                        <h2 className="text-accent text-center mb-3 text-2xl md:text-6xl">Update New Product</h2>
                    </div>
                    <form onSubmit={handleUpdateProduct} className="mt-6">
                        <div className=" flex justify-between md:gap-10 gap-2 mx-10 pb-6 ">
                            <div className="form-control w-1/2 ">
                                <label className="label">
                                    <span className="label-text text-lg">Name</span>
                                </label>
                                <label className="rounded-lg">
                                    <input type="text" name="name" defaultValue={name} placeholder="Product Name" className="input w-full md:text-base text-xs input-bordered" />
                                </label>
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text text-lg">Brand Name</span>
                                </label>
                                <label className="rounded-lg ">
                                    <input type="text" name="brand" defaultValue={brand} placeholder="Product Brand" className="input w-full md:text-base text-xs input-bordered" />
                                </label>
                            </div>
                        </div>
                        <div className=" flex justify-between md:gap-10 gap-2 mx-10 pb-6 ">

                            <div className="form-control w-1/2 ">
                                <label className="label">
                                    <span className="label-text text-lg">Price</span>
                                </label>
                                <label className="rounded-lg">
                                    <input type="text" name="price" defaultValue={price} placeholder="Product Price" className="input w-full md:text-base text-xs input-bordered" />
                                </label>
                            </div>
                            <div className="form-control w-1/2 md:text-base text-xs ">
                                <label className="label">
                                    <span className="label-text text-lg">Description</span>
                                </label>
                                <label className="rounded-lg ">
                                    <input type="text" name="description" defaultValue={description} placeholder="Product Description " className="input w-full md:text-base text-xs input-bordered" />
                                </label>
                            </div>
                        </div>
                        <div className=" flex justify-between md:gap-10 gap-2 mx-10 pb-6 ">
                            <div className="form-control w-1/2 ">
                                <label className="label">
                                    <span className="label-text text-lg">Rating</span>
                                </label>
                                <label className="rounded-lg">
                                    <input type="text" name="rating" defaultValue={rating} placeholder="Product Rating" className="input w-full md:text-base text-xs input-bordered" />
                                </label>
                            </div>
                            <div className="form-control w-1/2 md:text-base text-xs ">
                                <label className="label">
                                    <span className="label-text text-lg">Photo</span>
                                </label>
                                <label className="rounded-lg">
                                    <input type="text" name="photo" defaultValue={photo} placeholder="Product Photo Url" className="input w-full md:text-base text-xs input-bordered" />
                                </label>
                            </div>
                        </div>
                        <div className=" flex justify-between md:gap-10 gap-2 mx-10 pb-6 ">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-lg">Select Product Type</span>
                                </label>
                                <label className="rounded-lg ">
                                    <input type="text" name="type" defaultValue={type} placeholder="Phone/Computer/Headphone/Camera/Keyboard " className="input w-full md:text-base text-xs input-bordered" />
                                </label>
                            </div>
                        </div>
                        <div className="mx-10 pb-10">
                            <input type="submit" className="btn bg-accent w-full" value="Update Product" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default UpdateProduct;