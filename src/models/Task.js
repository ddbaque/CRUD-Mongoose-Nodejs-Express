import { Schema, model } from "mongoose";

const taskSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
      unique: true,
      trim: true, //! le quita al string espacios en blanco innecesarios
    },
    description: {
      type: String,
      require: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, //! permite crear una propiedad de fecha de creacion automatica
    versionKey: false,
  }
);

export default model("Task", taskSchema);
