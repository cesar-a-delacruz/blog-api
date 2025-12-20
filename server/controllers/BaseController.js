import DataParser from "../utils/DataParser.js";
export default class BaseController {
  constructor(model, fields) {
    this.model = model;
    this.dataParser = new DataParser({ ...fields });
  }
}
