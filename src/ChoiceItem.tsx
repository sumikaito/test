import React from "react";
import { UseFormRegister } from "react-hook-form";
import { QuestionForm } from "./Survey";

interface Props {
  register: UseFormRegister<QuestionForm>;
  questionIndex: number;
  choiceIndex: number;
  removeChoice: (index: number) => void;
}

const ChoiceItem = ({ register, questionIndex, removeChoice, choiceIndex }: Props) => {
  return (
    <div className={"choice-item-container"}>
      <label>
        <p>パネル {choiceIndex + 1}</p>
      </label>
      {/*<label>
        <p>選択肢 {choiceIndex + 1}</p>
        <input type="text" {...register(`questions.${questionIndex}.choices.${choiceIndex}.choiceText` as const)} />
      </label>
      */}
      <label>
        <p>公称最大出力</p>
        <input type="text" {...register(`questions.${questionIndex}.choices.${choiceIndex}.nominalMaxOutputPanel` as const)} />kw
      </label>
      <label>
        <p>設置緯度</p>
        <input type="text" {...register(`questions.${questionIndex}.choices.${choiceIndex}.latitudePanel` as const)} />
      </label>
      <label>
        <p>設置経度</p>
        <input type="text" {...register(`questions.${questionIndex}.choices.${choiceIndex}.longitudePanel` as const)} />
      </label>
      <label>
        <p>設置屋根</p>
         <select {...register(`questions.${questionIndex}.choices.${choiceIndex}.roofPanel` as const)}>
           <option value={"寄棟"}>寄棟</option>
           <option value={"切妻"}>切妻</option>
           <option value={"片流"}>片流</option>
           <option value={"陸屋根"}>陸屋根</option>
           <option value={"その他"}>その他</option>
         </select>
      </label>
      <label>
        <p>設置角度</p>
        <input type="text" {...register(`questions.${questionIndex}.choices.${choiceIndex}.roofPanelAngle` as const)} />
      </label>
      <label>
        <p>設置方角</p>
         <select {...register(`questions.${questionIndex}.choices.${choiceIndex}.directionPanel` as const)}>
           <option value={"北"}>北</option>
           <option value={"東"}>東</option>
           <option value={"南"}>南</option>
           <option value={"西"}>西</option>
           <option value={"北東"}>北東</option>
           <option value={"南東"}>南東</option>
           <option value={"南西"}>南西</option>
           <option value={"北西"}>北西</option>
           <option value={"その他"}>その他</option>
         </select>
      </label>
      <label>
        <p>設置方向</p>
        <input type="text" {...register(`questions.${questionIndex}.choices.${choiceIndex}.directionPanelDirection` as const)} />
      </label>
      <label>
        <p>設置建造物の地上部の階層数</p>
         <select {...register(`questions.${questionIndex}.choices.${choiceIndex}.hierarchyPanel` as const)}>
           <option value={"１階"}>１階</option>
           <option value={"２階"}>２階</option>
           <option value={"３階"}>３階</option>
           <option value={"４階"}>４階</option>
           <option value={"その他"}>その他</option>
         </select>
      </label>
      <label>
        <p>設置標高</p>
        <input type="text" {...register(`questions.${questionIndex}.choices.${choiceIndex}.hierarchyPanelElevation` as const)} />
      </label>
      <label>
        <p>材質</p>
         <select {...register(`questions.${questionIndex}.choices.${choiceIndex}.materialPanel` as const)}>
         　<option value={"結晶系"}>結晶系</option>
           <option value={"化合物系"}>化合物系</option>
           <option value={"HIT"}>HIT</option>
           <option value={"その他"}>その他</option>
         </select>
      </label>
      <label>
        <p>出力温度</p>
        <input type="text" {...register(`questions.${questionIndex}.choices.${choiceIndex}.materialPanelTemperature` as const)} />%/℃
      </label>
      <label>
        <p>公称動作セル温度(NOCD)</p>
        <input type="text" {...register(`questions.${questionIndex}.choices.${choiceIndex}.cellTemperaturePanel` as const)} />℃
      </label>
      <button onClick={() => removeChoice(choiceIndex)} type={"button"} style={{ marginLeft: "16px" }}>
        パネル情報を削除
      </button>
    </div>
  )
}

export default ChoiceItem;