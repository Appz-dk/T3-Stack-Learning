import { buildTypes, makeSafeBuildTypeString } from "../pages/submit-build";
import Label from "./Label";

const BuildTypeToggles: React.FC<{
  handleBuildTypeChange: (buildType: string) => void;
  selectedBuildType: string;
}> = ({ handleBuildTypeChange: handleBuildTypeChange, selectedBuildType }) => {
  return (
    <fieldset className="w-full">
      <Label>Build Type</Label>
      <ul className="mt-2 w-full items-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:flex">
        {buildTypes.map((buildType) => {
          const safeBuildTypeString = makeSafeBuildTypeString(buildType);
          return (
            <li
              key={safeBuildTypeString}
              className="w-full min-w-fit border-b border-gray-200 dark:border-gray-600 sm:border-b-0 sm:border-r"
            >
              <div className="flex items-center pl-2 pr-1">
                <input
                  id={`build-type-${safeBuildTypeString}`}
                  type="radio"
                  value={safeBuildTypeString}
                  checked={safeBuildTypeString === selectedBuildType}
                  onChange={(e) => handleBuildTypeChange(e.currentTarget.value)}
                  className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
                />
                <label
                  htmlFor={`build-type-${safeBuildTypeString}`}
                  className="ml-2 w-full py-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {buildType}
                </label>
              </div>
            </li>
          );
        })}
      </ul>
    </fieldset>
  );
};

export default BuildTypeToggles;
