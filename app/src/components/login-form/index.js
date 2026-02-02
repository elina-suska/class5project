export default function Login() {
	return (
		<div class="profile" style={{
			display: "flex",
			flexDirection: "column",
			width: "40%",
			padding: "20px"
		}}>
			<img src="https://picsum.photos/200/100"></img>
			<button class="dm" type="button" style= {{
				backgroundColor: "green",
				padding: "10px",
				margin: "15px",
				width: "150px"
			}}>DM</button>
			<p class="username" style={{
				padding: "10px"
			}}>@username</p>
			<p class="bio" style={{
				fontStyle: "italic",
				padding: "10px"
			}}>Bio. . . . . . . . . . .</p>
		</div>
	);
}