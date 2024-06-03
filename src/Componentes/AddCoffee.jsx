import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = event=>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = {name,quantity,supplier,taste,category,details,photo}
        console.log(newCoffee);

        fetch('http://localhost:5000/coffee',{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'coffee add success',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
            console.log(data);
        })

    }

    return (
        <div className="p-24 bg-[#F4F3F0]">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-extrabold">This is a add a coffee</h2>
                <h2>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</h2>
            </div>
            <form  onSubmit={handleAddCoffee}>

                {/* form name and quantity */}
                <div className="md:flex gap-4 mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" className="input input-bordered w-full" placeholder="Coffee Name" name="name" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 mb-4">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" className="input input-bordered w-full" placeholder="Quantity" name="quantity" />
                        </label>
                    </div>
                </div>
                {/* form supplier and taste */}
                <div className="md:flex gap-4 mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" className="input input-bordered w-full" placeholder="Supplier" name="supplier" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 mb-4">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" className="input input-bordered w-full" placeholder="Taste" name="taste" />
                        </label>
                    </div>
                </div>
                {/* form category and details */}
                <div className="md:flex gap-4 mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" className="input input-bordered w-full" placeholder="Category" name="category" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 mb-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" className="input input-bordered w-full" placeholder="Details" name="details" />
                        </label>
                    </div>
                </div>
                {/* form photo */}
                <div className="gap-4 mb-4">
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" className="input input-bordered w-full" placeholder="Photo URL" name="photo" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Coffee" className="btn btn-block" />
            </form>
        </div>
    );
};

export default AddCoffee;