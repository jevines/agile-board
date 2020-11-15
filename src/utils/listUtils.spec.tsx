import { moveTask, reorderTaskList } from "./listUtils";
const mockList = [1, 2, 3, 4];

describe("reorderTaskList()", () => {
  it("should return the correctly ordered list", () => {
    const result = reorderTaskList(mockList as any, 0, 2);

    expect(result).toEqual([2, 3, 1, 4]);
  });
});

describe("moveTask()", () => {
  it("should remove the correct task from the source list", () => {
    const mockSource = [9, 8, 7];
    const mockDestination = [1, 2, 3];
    const { sourceList } = moveTask(
      mockSource as any,
      mockDestination as any,
      2,
      1
    );

    expect(sourceList).toEqual([9, 8]);
  });
  it("should add the correct task to the destination List", () => {
    const mockSource = [9, 8, 7];
    const mockDestination = [1, 2, 3];
    const { destinationList } = moveTask(
      mockSource as any,
      mockDestination as any,
      2,
      1
    );

    expect(destinationList).toEqual([1, 7, 2, 3]);
  });
});
