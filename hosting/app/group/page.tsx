"use client";
import { useState } from "react";

export default function Page() {
	const [state, setState] = useState(0);

  return <div>
		<h1>Group</h1>
		<p>Page content. Counter: {state}</p>
		<button onClick={() => setState(state + 1)}>Click me</button>
	</div>
}
