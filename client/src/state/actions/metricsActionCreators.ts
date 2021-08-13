import { Type } from '../constants/metricsConstants';
import { singleValData, quartileData } from '../reducers/metricsDataReducer';
import { MetricsState } from '../reducers/metricsDataReducer';

export interface Action {
  type: number;
  metric: keyof MetricsState;
  payload?: any;
}

const mapKeyToType = {
  bytesOutPerSec: Type.APPEND,
  isrShrinkPerSec: Type.APPEND,
  leaderElectionRateAndTimeMS: Type.APPEND,
  uncleanLeaderElectionsPerSec: Type.APPEND,
  activeContollerCount: Type.UPDATE,
  offlinePartitionCount: Type.UPDATE,
  underReplicatedPartitions: Type.UPDATE,
  garbageCollectionCount: Type.UPDATE,
  createTopics: Type.APPEND,
  leaderAndIsr: Type.APPEND,
  listGroups: Type.APPEND,
  metadata: Type.APPEND,
  updateMetaData: Type.APPEND,
  bytesInPerSec: Type.APPEND,
  fetch: Type.APPEND,
  produce: Type.APPEND,
  messagesPerSecond: Type.APPEND,
  zkRequestLatencyMsCount: Type.UPDATE,
  cpuSecondsTotal: Type.UPDATE,
  zkRequestLatencyMs: Type.APPEND,
  codeCache: Type.UPDATE,
  heap: Type.APPEND,
  nonheap: Type.APPEND,
};

export const metricsActionCreator = (
  key: keyof MetricsState,
  data: singleValData | quartileData
): Action => {
  return {
    type: mapKeyToType[key],
    metric: key,
    payload: data,
  };
};
