import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee

    const handleDelete = _id => {
        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                //   Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                //   });

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remaining = coffees.filter(cofe=>cofe._id !== _id)
                            setCoffees(remaining)
    
                            Swal.fire({
                                title: "Deleted!",
                                text: "coffee has been deleted.",
                                icon: "success"
                            });
                        }

                       
                        console.log(data);

                    })

            }
        });



    }

    return (

        <div>
            <div className="card card-side bg-base-100 shadow-xl p-4">
                <figure><img src={photo} alt="Movie" /></figure>
                <div className="flex  justify-around w-full">
                    <div>
                        <h2 className="card-title">{name}</h2>
                        <p>{quantity}</p>
                        <p>{supplier}</p>
                        <p>{taste}</p>
                    </div>
                    <div className=" justify-end">
                        <div className="join join-vertical space-y-4">
                            <button className="btn join-item">view</button>
                            <Link to={`/updatecoffee/${_id}`}>
                                <button className="btn join-item">update</button>
                            </Link>
                            <button onClick={() => handleDelete(_id)} className="btn join-item">X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;