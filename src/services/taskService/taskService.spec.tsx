import { updateTasks, getTasks } from "./taskService";

const setItemSpy = jest.spyOn(Storage.prototype, "setItem");
const setGetSpy = jest.spyOn(Storage.prototype, "getItem");

describe("updateTasks", () => {
  it("should call setItem with the stringified list", () => {
    updateTasks({ todo: "testTask" as any });

    expect(setItemSpy).toHaveBeenCalledWith("taskState", '{"todo":"testTask"}');
  });
});

describe("getTasks", () => {
  it("should return undefined if there is no state in storage", () => {
    const result = getTasks();

    expect(result).toBeUndefined();
  });

  it("should return the task state if present in storage", () => {
    setGetSpy.mockReturnValue('{"todo":"testTask"}');
    const result = getTasks();

    expect(result).toEqual({ todo: "testTask" });
  });
});
