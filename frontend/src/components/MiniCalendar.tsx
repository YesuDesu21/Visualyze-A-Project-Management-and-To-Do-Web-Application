import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";

type MiniCalendarProps = {
    // DatePicker provides a 'value' (Dayjs object), so your prop should accept it
    onChange?: (value: Dayjs | null) => void;
    value?: Dayjs | null;
};

const MiniCalendar = ({ onChange, value }: MiniCalendarProps) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                label="Select Date"
                orientation="landscape"
                value={value}
                onChange={onChange}
                className="rounded-md mb-2"
                slotProps={{
                    textField: {
                        fullWidth: true,
                        variant: "outlined",
                    },
                }}
            />
        </LocalizationProvider>
    );
};

export default MiniCalendar;
