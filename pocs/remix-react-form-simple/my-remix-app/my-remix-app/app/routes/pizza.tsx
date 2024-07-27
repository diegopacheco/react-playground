import { Form, useActionData } from "@remix-run/react";
import { ActionFunction, json } from "@remix-run/node";

export const action: ActionFunction = async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get("name");
    const address = formData.get("address");
    const pizzaType = formData.get("pizzaType");

    console.log("Pizza Delivery Request:", { name, address, pizzaType });
    return json({ success: true });
};

export default function PizzaForm() {
    const actionData: { success?: boolean } | undefined = useActionData();

    return (
        <div className="max-w-md mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Order a Pizza</h1>
            <Form method="post" className="space-y-4">
                <div className="flex flex-col">
                    <label htmlFor="name" className="mb-1 font-medium">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="border border-gray-300 p-2 rounded"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="address" className="mb-1 font-medium">Address:</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        required
                        className="border border-gray-300 p-2 rounded"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="pizzaType" className="mb-1 font-medium">Pizza Type:</label>
                    <select
                        id="pizzaType"
                        name="pizzaType"
                        required
                        className="border border-gray-300 p-2 rounded"
                    >
                        <option value="margherita">Margherita</option>
                        <option value="pepperoni">Pepperoni</option>
                        <option value="veggie">Veggie</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Order Pizza
                </button>
            </Form>
            {actionData?.success && (
                <p className="mt-4 text-green-500">Pizza order logged successfully!</p>
            )}
        </div>
    );
}