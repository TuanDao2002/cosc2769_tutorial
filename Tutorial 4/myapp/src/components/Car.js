import { useEffect, useState } from "react";

export default function Car() {
    const [data, setData] = useState([]);
    const [id, setId] = useState("");
    const [name, setName] = useState("");

    const load = () => {
        fetch(
            "https://2vfi2n4y7b.execute-api.ap-southeast-1.amazonaws.com/testing/cars"
        )
            .then((res) => res.json())
            .then((json) => setData(json.Items));
    };

    useEffect(() => {
        load();
    }, []);

    const save = () => {
        fetch(
            "https://2vfi2n4y7b.execute-api.ap-southeast-1.amazonaws.com/testing/cars",
            {
                method: "put",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id: id, name: name }),
            }
        ).then((res) => {
            load();
        });
    };

    const edit = (id, name) => {
        setId(id);
        setName(name);
    };

    const addNew = () => {
        setId("");
        setName("");
    };

    const deleteCar = (id) => {
        fetch(
            "https://2vfi2n4y7b.execute-api.ap-southeast-1.amazonaws.com/testing/cars/" +
                id,
            {
                method: "delete",
            }
        ).then((res) => {
            const newdata = data.filter((item) => {
                return item.id !== id;
            });
            setData(newdata);
        });
    };

    return (
        <div>
            <h1>Add a new form</h1>
            Id:
            <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            Name:
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={() => save()}>Save</button>
            <button onClick={() => addNew()}>Add new</button>
            <h1>List of car</h1>
            {data.map((item) => (
                <li key={item.id}>
                    {item.id} {item.name}
                    <button onClick={() => edit(item.id, item.name)}>
                        Edit
                    </button>
                    <button onClick={() => deleteCar(item.id)}>Delete</button>
                </li>
            ))}
        </div>
    );
}
