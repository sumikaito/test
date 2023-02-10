
import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import QuestionItem from './QuestionItem';

type QuestionType = "FREE" | "SELECT";

const Gender = {
  Female: "female",
  Male: "male",
  Other: "other",
} as const;

type GenderType = typeof Gender[keyof typeof Gender];

const Roof = {
  A: "寄棟",
  B: "切妻",
  C: "片流",
  D: "陸屋根",
  Other: "その他",
} as const;

type RoofType = typeof Roof[keyof typeof Roof];

const Direction = {
  A: "北",
  B: "東",
  C: "南",
  D: "西",
  E: "北東",
  F: "南東",
  G: "南西",
  H: "北西",
  Other: "その他",
} as const;

type DirectionType = typeof Direction[keyof typeof Direction];

const Hierarchy = {
  A: "１階",
  B: "２階",
  C: "３階",
  D: "４階",
  Other: "その他",
} as const;

type HierarchyType = typeof Hierarchy[keyof typeof Hierarchy];

const Material = {
  A: "結晶系",
  B: "化合物系",
  C: "HIT",
  Other: "その他",
} as const;

type MaterialType = typeof Material[keyof typeof Material];

interface Choice {
  choiceText: string;
  nominalMaxOutputPanel: string;
  latitudePanel: string;
  longitudePanel: string;
  roofPanel: RoofType;
  gender: GenderType;
  roofPanelAngle: string;
  directionPanel: DirectionType;
  directionPanelDirection: string;
  hierarchyPanel: HierarchyType;
  hierarchyPanelElevation: string;
  materialPanel: MaterialType;
  materialPanelTemperature: string;
  cellTemperaturePanel: string;
}

interface Question {
  measuringPointName: string;
  nominalMaxOutput: string;
  latitude: string;
  longitude: string;
  questionText: string;
  questionType: QuestionType;
  choices: Choice[];
}

export interface QuestionForm {
  customerName: string;
  address: string;
  representative: string;
  tel: string;
  questions: Question[]
}

const Survey = () => {
  const { handleSubmit, register, control } = useForm<QuestionForm>({
    defaultValues: {
      questions: [{ measuringPointName: "", nominalMaxOutput: "", latitude: "", longitude: "",
      questionText: "", questionType: "FREE", choices: [] }]
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const addQuestion = () => {
    append({ measuringPointName: "", nominalMaxOutput: "", latitude: "", longitude: "",
    questionText: "", questionType: "FREE", choices: [] })
  }

  const removeQuestion = (index: number) => {
    remove(index);
  }

  const doSubmit = (data: QuestionForm) => {
    console.log("data", data);
  }

  return (
    <div className={"container"}>
      <form onSubmit={handleSubmit(doSubmit)} className={"form-container"}>
      <div>
        <label>
          <p>需要家情報</p>
        </label>
        <label>
          <p>需要家名</p>
          <input type="text" {...register(`customerName` as const)} />
        </label>
        <label>
          <p>住所</p>
          <input type="text" {...register(`address` as const)} />
        </label>
        <label>
          <p>代表者</p>
          <input type="text" {...register(`representative` as const)} />
        </label>
        <label>
          <p>TEL</p>
          <input type="text" {...register(`tel` as const)} />
        </label>
        <>
        {fields.map((field, index) => (
          <QuestionItem
            key={field.id}
            register={register}
            control={control}
            questionIndex={index}
            removeQuestion={removeQuestion}
          />
        ))}
        <div className={"question-add-action-wrapper"}>
          <button onClick={addQuestion} type={"button"}>
            計測点情報を追加
          </button>
        </div>
        <div className={"form-action-wrapper"}>
          <button type="submit">登録</button>
          {/* 課題：戻るボタンを実装すること */} 
          <button type="submit">戻る</button>
        </div>
        </>
        </div>
      </form>
    </div>
  );
}

export default Survey;