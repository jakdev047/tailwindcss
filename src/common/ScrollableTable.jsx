import React from "react";

const ScrollableTable = (props) => {
	return (
		<div className="">
			<div className="">
				<table className={props.classess ? `table-auto w-full ${props.classess}` : "table-auto w-full"}>
					{props.children}
				</table>
			</div>
		</div>
	);
};

export default ScrollableTable;
