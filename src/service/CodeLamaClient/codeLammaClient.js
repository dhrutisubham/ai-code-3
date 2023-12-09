async function codeLamaClient(data) {
    const input_obj = {
        "inputs": data
    }
    const response = await fetch(
        "https://api-inference.huggingface.co/models/Phind/Phind-CodeLlama-34B-v2",
        {
            headers: { Authorization: "Bearer {API_TOKEN}" },
            method: "POST",
            body: JSON.stringify(input_obj),
        }
    );
    const result = await response.json();
    return result;
}

codeLamaClient("Can you please let us know more details about your ").then((response) => {
    console.log(JSON.stringify(response));
});
