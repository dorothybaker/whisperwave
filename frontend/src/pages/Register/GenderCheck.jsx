export default function GenderCheck({ onChangeGender, gender }) {
  return (
    <div className="flex mt-2">
      <div className="form-control">
        <label className="cursor-pointer gap-2 label">
          <span>Male</span>
          <input
            type="radio"
            name="radio-2"
            className="radio radio-primary"
            checked={gender === "male"}
            onChange={() => onChangeGender("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label className="cursor-pointer gap-2 label">
          <span>Female</span>
          <input
            type="radio"
            name="radio-2"
            className="radio radio-primary"
            checked={gender === "female"}
            onChange={() => onChangeGender("female")}
          />
        </label>
      </div>
    </div>
  );
}
