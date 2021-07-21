import React from 'react';
import idea from "../img/idea.png";
import heart from "../img/heart.png";
import power from "../img/power.png";

function IdeasTable() {
	return (
		<table className="w-full table mt-20">
			<tbody>
				<tr className="bg-white">
					<td className="p-0">
						<div className="text-xl">
							<div className="relative">
								<p className="text-center">
									<img src={idea} className="mx-auto w-24" />
									<strong>Inspiring</strong>
									<br />
									<br />
									Not only do we create fun workouts to push you to your limits,
									what can be better than having the sunrise on Coogee Beach as
									your backdrop?!
								</p>
							</div>
						</div>
					</td>
					<td className="p-0">
						<div className="text-xl">
							<div className="relative">
								<p className="text-center">
									<img src={heart} className="mx-auto w-24" />
									<strong><br />Inclusive</strong>
									<br />
									<br />
									Whether you are an experienced gym-goer or new to exercise, we
									cater to all levels. We keep class numbers low, so that you get
									the guidance you deserve.
								</p>
							</div>
						</div>
					</td>
					<td className="p-0">
						<div className="text-xl">
							<div className="relative">
								<p className="text-center">
									<img src={power} className="mx-auto w-24" />
									<strong>Innovative</strong>
									<br />
									<br />
									If it doesn't challenge you, it doesn't change you and at
									BeachFit and Wellbeing, no two workouts are the same to really
									keep you on your toes!
								</p>
							</div>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	)
}

export default IdeasTable;