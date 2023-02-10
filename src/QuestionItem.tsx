import React from "react";
import { Control, useFieldArray, UseFormRegister, useWatch } from "react-hook-form";
import { QuestionForm } from "./Survey";
import ChoiceItem from "./ChoiceItem";

interface Props {
  register: UseFormRegister<QuestionForm>;
  control: Control<QuestionForm>;
  questionIndex: number;
  removeQuestion: (index: number) => void;
}

const QuestionItem = ({ register, control, questionIndex, removeQuestion }: Props) => {
  const questionType = useWatch({
    control,
    name: `questions.${questionIndex}.questionType` as const
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: `questions.${questionIndex}.choices` as "questions.0.choices",
  });

  const addChoice = () => {
    append({ choiceText: "", nominalMaxOutputPanel: "", latitudePanel: "",
    longitudePanel: "", roofPanel: "寄棟", gender: "female", roofPanelAngle: "", directionPanel: "北",
    directionPanelDirection: "", hierarchyPanel: "１階", hierarchyPanelElevation: "",
    materialPanel: "結晶系", materialPanelTemperature: "", cellTemperaturePanel: ""})
  }

  const removeChoice = (choiceIndex: number) => {
    remove(choiceIndex);
  }

  return (
    <div className={"question-item-container"}>
      <div>
        {/*<label>
          <p>質問 {questionIndex + 1}</p>
          <input type="text" {...register(`questions.${questionIndex}.questionText` as const)} />
        </label>
        */}
        <label>
          <p>計測点 {questionIndex + 1}</p>
        </label>
        <label>
          <p>計測点名</p>
          <input type="text" {...register(`questions.${questionIndex}.measuringPointName` as const)} />
        </label>
        <label>
          <p>公称最大出力</p>
          <input type="text" {...register(`questions.${questionIndex}.nominalMaxOutput` as const)} />kw
        </label>
        <label>
          <p>緯度</p>
          <input type="text" {...register(`questions.${questionIndex}.latitude` as const)} />
        </label>
        <label>
          <p>経度</p>
          <input type="text" {...register(`questions.${questionIndex}.longitude` as const)} />
        </label>
        {/* 課題：住所から登録ボタンを実装すること */}
        <button type={"button"} onClick={() => removeQuestion(questionIndex)} style={{ marginLeft: "16px" }}>
          住所から登録
        </button>
        <button type={"button"} onClick={() => removeQuestion(questionIndex)} style={{ marginLeft: "16px" }}>
          計測点情報を削除
        </button>
        <>
          {fields.map((field, index) => (
            <ChoiceItem
              key={field.id}
              register={register}
              questionIndex={questionIndex}
              choiceIndex={index}
              removeChoice={removeChoice}
            />
          ))}
          <div style={{ marginTop: "24px", textAlign: "center" }}>
            <button onClick={addChoice} type={"button"}>
              パネル情報を追加
            </button>
          </div>
        </>
      </div>
      {/*
      <div>
        <p>種類</p>
        <label style={{ fontSize: "14px" }}>
          フリーワード
          <input type={"radio"} value={"FREE"} {...register(`questions.${questionIndex}.questionType` as const)} />
        </label>
        <label style={{ fontSize: "14px" }}>
          選択式
          <input type={"radio"} value={"SELECT"} {...register(`questions.${questionIndex}.questionType` as const)} />
        </label>
      </div>
      {questionType === "SELECT" && (
        <>
          {fields.map((field, index) => (
            <ChoiceItem
              key={field.id}
              register={register}
              questionIndex={questionIndex}
              choiceIndex={index}
              removeChoice={removeChoice}
            />
          ))}
          <div style={{ marginTop: "24px", textAlign: "center" }}>
            <button onClick={addChoice} type={"button"}>
              選択肢を追加
            </button>
          </div>
        </>
      )}
          */}
    </div>
  )
}

export default QuestionItem;