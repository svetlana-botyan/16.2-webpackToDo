import "../scss/app.scss";

import { Storage } from "./storage";
import { Form } from "./form";
import { List } from "./list";
import { UpdatedList } from "./updated-list";

const formElement = document.querySelector("#form");
const listParentElement = document.querySelector("#listParent");
const selectPriorityElement = formElement.querySelector("#priority");
const buttonNewListElement = formElement.querySelector("#addCategory");

const listElements = {
  commonGroup: document.querySelector("#commonGroup"),
  workGroup: document.querySelector("#workGroup"),
  personalGroup: document.querySelector("#personalGroup"),
  educationGroup: document.querySelector("#educationGroup"),
};

const storage = new Storage(listParentElement)
const data = storage.data
new Form(data, formElement, selectPriorityElement)
new List(data, listParentElement, listElements)
new UpdatedList(data, listParentElement)
