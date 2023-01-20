const getBootstrapColor = (color) => {
    switch (color) {
        case "blue":
            return "primary";
        case "cyan":
            return "info";
        case "green":
            return "success";
        case "orange":
            return "warning";
        case "red":
            return "danger";
        case "dark":
            return "dark";
        default:
            return "primary";
    }
};

export default getBootstrapColor;
