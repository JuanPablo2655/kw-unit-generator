import './Input.css';
import InputForm from "./forms/input";
import Dropdown from "./forms/dropdown";
//import CheckBox from "./forms/checkbox";
import ancestries from "../constants/ancestries";
import equipment from "../constants/equipment";
import experience from "../constants/experience";
import type from "../constants/type";
import size from '../constants/size';
import races from '../constants/races';
import { useRef, useState } from "react";
import defaults from '../constants/defaults';

const InputBox = ({onMod}) => {
    const [isLevy, checkLevy] = useState(false);

    const nameRef = useRef(defaults.name);
    const commandRef = useRef();
    const ancestRef = useRef(defaults.ancestry);
    const typeRef = useRef(defaults.type);
    const expRef = useRef(defaults.exp);
    const equipRef = useRef(defaults.equip);
    const raceRef = useRef(defaults.race);
    const sizeRef = useRef(defaults.size);

    {Object.entries(races).map(([k, v]) => (
        <option value={v} key={k}>
        </option>
      ))}
      console.log(races.Air_Elemental)

    const onSave = () => {
        const body = {
            name: nameRef.current.value,
            commander: commandRef.current.value,
            ancestry: ancestRef.current.value,
            unit: typeRef.current.value,
            exp: typeRef.current.value === 'levy' ? 0 : expRef.current.value,
            equip: typeRef.current.value === 'levy' ? 0 : equipRef.current.value,
            race: raceRef.current.value,
            size: sizeRef.current.value,
            //traits: traitRef.current.value
        }
        console.log(body)
        onMod(body)
    }

    function setLevy() {
        checkLevy(typeRef.current.value === 'levy');
    }

    return (
        <>
        <div className='input-columns'>
        <InputForm
            label="Name"
            ref={nameRef}
            //onChange={onSave}
            />
        <InputForm
            label="Commander"
            ref={commandRef}
            //onChange={onSave}
            />
        <Dropdown
            label="Ancestry"
            ref={ancestRef}
            passedValue={defaults.ancestry} 
            passedOptions={ancestries}
            //onChange={onSave}
            />
        <Dropdown
            label="Race"
            ref={raceRef}
            passedValue={defaults.race} 
            passedOptions={races}
            //onChange={onSave}
            />
        <Dropdown
            label="Type"
            ref={typeRef}
            passedValue={defaults.unit} 
            passedOptions={type}
            onChange={setLevy}
            />
        {!isLevy && (
            <>
        <Dropdown
            label="Experience"
            ref={expRef}
            passedValue={defaults.exp} 
            passedOptions={experience}
            //onChange={onSave}
            />
        <Dropdown
            label="Equipment"
            ref={equipRef}
            passedValue={defaults.equip} 
            passedOptions={equipment}
           //onChange={onSave}
            />
            </>
            )}
        <Dropdown
            label="Size"
            ref={sizeRef}
            passedValue={defaults.size} 
            passedOptions={size}
            //onChange={onSave}
            />
        
            Card Theme:
            <br></br>
        <input
        type ="submit"
        value="Generate"
        onClick={onSave}
        />
        </div>
        </>
    )
}

export default InputBox;