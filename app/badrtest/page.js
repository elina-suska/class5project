export default function Home() {
    return (
        <div
            style={{
                background: "#f4f4f4",
                padding: "40px",
                fontFamily: "Arial, sans-serif",
            }}
        >
            <div
                style={{
                    width: "600px",
                    background: "#e6e6e6",
                    padding: "20px",
                    borderRadius: "6px",
                }}
            >

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            fontWeight: "bold",
                            color: "#333",
                        }}
                    >
                        @username
                    </div>

                    <div
                        style={{
                            fontSize: "14px",
                            color: "#555",
                        }}
                    >
                        dd/mm/yyyy - 00:00:00
                    </div>
                </div>


                <div
                    style={{
                        margin: "14px 0",
                        color: "#333",
                    }}
                >
                    comment 1 lorem ipsum yadi yadi yadi so
                </div>


                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            flex: 1,
                            borderBottom: "2px dotted #666",
                            marginRight: "15px",
                        }}
                    ></div>

                    <div
                        style={{
                            background: "#7bc96f",
                            color: "#fff",
                            padding: "10px 26px",
                            borderRadius: "6px",
                            fontWeight: "bold",
                            cursor: "pointer",
                            textAlign: "center",
                        }}
                    >
                        Reply
                    </div>
                </div>
            </div>
        </div>
    );
}
