/**
* This is an auto generated code. This code should not be modified since the file can be overwriten
* if new genezio commands are executed.
*/

import { Remote } from "./remote";


export class ActivitiesService {
  static remote = new Remote("https://hpq42gyta6dxzbwsffrwrz3ryi0iqcmk.lambda-url.eu-central-1.on.aws/ActivitiesService");

  static async getActivitiesForTOD(tod: TimeOfDay): Promise<Array<Activity>> {
    return await ActivitiesService.remote.call("ActivitiesService.getActivitiesForTOD", tod);
  }
  static async useActivity(activityId: number): Promise<UseActivityResult> {
    return await ActivitiesService.remote.call("ActivitiesService.useActivity", activityId);
  }
}

export { Remote };
