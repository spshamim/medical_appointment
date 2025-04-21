const getItem = () => {
    const appointments = localStorage.getItem("appointments");
    if (appointments) {
        return JSON.parse(appointments);
    } else {
        return [];
    }
};

const setItem = (appointments) => {
    const appointmentsArray = getItem();

    const isDuplicate = appointmentsArray.find(
        (item) => item.name === appointments.name
    );

    if (isDuplicate) {
        return false;
    }

    appointmentsArray.push(appointments);

    localStorage.setItem("appointments", JSON.stringify(appointmentsArray));

    return true;
};

const removeItem = (name) => {
    const appointmentsArray = getItem();
    const newAppointmentsArray = appointmentsArray.filter(
        (item) => item.name !== name
    );
    localStorage.setItem("appointments", JSON.stringify(newAppointmentsArray));
};

export { getItem, setItem, removeItem };
