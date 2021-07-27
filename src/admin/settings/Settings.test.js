import Settings from "./Settings";
import { render } from "@testing-library/react";
import { expect } from "@jest/globals";

const notification = () => { console.log("Dummy notification") }

it('should render Settings into the page', () => {
		const title = render(<Settings notification={notification} />)
		expect(title.getByTestId("siteSettings")).toHaveTextContent("Loading");	
})