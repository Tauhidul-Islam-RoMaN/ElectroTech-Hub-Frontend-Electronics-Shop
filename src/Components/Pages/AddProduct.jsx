import Swal from "sweetalert2";

const AddProduct = () => {


    const handleAddProduct = (e) => {
        e.preventDefault()
        const form = e.target
        // form.reset("")
        const name = form.name.value
        const brand = form.brand.value
        const price = form.price.value
        const description = form.description.value
        const rating = form.rating.value
        const photo = form.photo.value
        const type = form.type.value

        const newProduct = { name, brand, price, description, rating, photo, type }
        console.log(newProduct);

        fetch("https://assignment-10-server-ten-tan.vercel.app/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                Swal.fire(
                    'Added!',
                    'Your Product Added successfully.',
                    'success'
                )
            });

    }
    const handleAddBrand = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photo = form.photo.value

        const newBrand = { name, photo }
        console.log(newBrand);


        fetch("https://assignment-10-server-ten-tan.vercel.app/brands", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newBrand),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                form.reset()
            });


    }
    return (
        <>
            <div className="pb-32 pt-16" >
                <div className="bg-[#F4F3F0] lg:max-w-4xl md:max-w-2xl mx-auto">
                    <div className="lg:mx-32 pt-10 md:mx-16">
                        <h2 className="text-accent text-center mb-3 text-2xl md:text-6xl">Add New Product</h2>
                    </div>
                    <form onSubmit={handleAddProduct} className="mt-6">
                        <div className=" flex justify-between md:gap-10 gap-2 mx-10 pb-6 ">
                            <div className="form-control w-1/2 ">
                                <label className="label">
                                    <span className="label-text text-lg">Name</span>
                                </label>
                                <label className="rounded-lg">
                                    <input type="text" name="name" placeholder="Product Name" className="input w-full md:text-base text-xs input-bordered" />
                                </label>
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text text-lg">Brand Name</span>
                                </label>
                                <label className="rounded-lg ">
                                    <input type="text" name="brand" placeholder="Product Brand" className="input w-full md:text-base text-xs input-bordered" />
                                </label>
                            </div>
                        </div>
                        <div className=" flex justify-between md:gap-10 gap-2 mx-10 pb-6 ">

                            <div className="form-control w-1/2 ">
                                <label className="label">
                                    <span className="label-text text-lg">Price</span>
                                </label>
                                <label className="rounded-lg">
                                    <input type="text" name="price" placeholder="Product Price" className="input w-full md:text-base text-xs input-bordered" />
                                </label>
                            </div>
                            <div className="form-control w-1/2 md:text-base text-xs ">
                                <label className="label">
                                    <span className="label-text text-lg">Description</span>
                                </label>
                                <label className="rounded-lg ">
                                    <input type="text" name="description" placeholder="Product Description " className="input w-full md:text-base text-xs input-bordered" />
                                </label>
                            </div>
                        </div>
                        <div className=" flex justify-between md:gap-10 gap-2 mx-10 pb-6 ">
                            <div className="form-control w-1/2 ">
                                <label className="label">
                                    <span className="label-text text-lg">Rating</span>
                                </label>
                                <label className="rounded-lg">
                                    <input type="text" name="rating" placeholder="Product Rating" className="input w-full md:text-base text-xs input-bordered" />
                                </label>
                            </div>
                            <div className="form-control w-1/2 md:text-base text-xs ">
                                <label className="label">
                                    <span className="label-text text-lg">Photo</span>
                                </label>
                                <label className="rounded-lg">
                                    <input type="text" name="photo" placeholder="Product Photo Url" className="input w-full md:text-base text-xs input-bordered" />
                                </label>
                            </div>
                        </div>
                        <div className=" flex justify-between md:gap-10 gap-2 mx-10 pb-6 ">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-lg">Select Product Type</span>
                                </label>
                                <label className="rounded-lg ">
                                    <input type="text" name="type" placeholder="Phone/Computer/Headphone/Camera/Keyboard " className="input w-full md:text-base text-xs input-bordered" />
                                </label>
                            </div>
                        </div>
                        {/* <div className=" flex justify-between md:gap-10 gap-2 mx-10 pb-6 ">
                            <div className="form-control w-full md:text-base text-xs ">
                                <label htmlFor="dropdown" >
                                    <span className="label-text text-lg">Select Product Type</span>
                                </label>
                                <label className="rounded-lg mt-2 ">
                                    <select id="dropdown" name="fruit" className="input w-full md:text-base text-xs input-bordered">
                                        <option name="phone" value="phone">Phone</option>
                                        <option name="computer" value="computer">Computer</option>
                                        <option name="keyboard" value="keyboard">KeyBoard</option>
                                        <option name="headphone" value="headphone">Headphone</option>
                                        <option name="camera" value="camera">Camera</option>
                                    </select>
                                </label>
                            </div>
                        </div> */}
                        <div className="mx-10 pb-10">
                            <input type="submit" className="btn bg-accent w-full" value="Add Product" />
                        </div>
                    </form>
                </div>
            </div>
            <div className="pb-32 pt-16" >
                <div className="bg-[#F4F3F0] lg:max-w-4xl md:max-w-2xl mx-auto">
                    <div className="lg:mx-32 pt-10 md:mx-16">
                        <h2 className="text-accent text-center mb-3 text-2xl md:text-6xl">Add New Brand</h2>
                    </div>
                    <form onSubmit={handleAddBrand} className="mt-6">
                        <div className=" flex justify-between md:gap-10 gap-2 mx-10 pb-6 ">
                            <div className="form-control w-1/2 ">
                                <label className="label">
                                    <span className="label-text text-lg">Name</span>
                                </label>
                                <label className="rounded-lg">
                                    <input type="text" name="name" placeholder="Product Name" className="input w-full md:text-base text-xs input-bordered" />
                                </label>
                            </div>
                            <div className="form-control w-1/2 md:text-base text-xs ">
                                <label className="label">
                                    <span className="label-text text-lg">Photo</span>
                                </label>
                                <label className="rounded-lg">
                                    <input type="text" name="photo" placeholder="Product Photo Url" className="input w-full md:text-base text-xs input-bordered" />
                                </label>
                            </div>
                        </div>
                        <div className="mx-10 pb-10">
                            <input type="submit" className="btn bg-accent w-full" value="Add New Brand" />
                        </div>
                    </form>
                </div>
            </div>
        </>

    );
};

export default AddProduct;