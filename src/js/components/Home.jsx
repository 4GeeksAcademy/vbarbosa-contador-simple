import React from "react";
import { Counter } from "./Counter";

//include images into your bundle bellow



export default function Home() {
	return (
		<div className="text-center d-flex bg-dark w-75 justify-content-center mx-auto p-2">
        	<Counter />
		</div>
	);
};