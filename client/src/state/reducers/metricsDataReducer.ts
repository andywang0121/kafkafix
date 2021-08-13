import { Type } from '../constants/metricsConstants';
import { Action } from '../actions/metricsActionCreators';

export type singleValData = [number?, string?];

export interface quartileData {
  '0.50': singleValData;
  '0.75': singleValData;
  '0.95': singleValData;
  '0.98': singleValData;
  '0.99': singleValData;
  '0.999': singleValData;
}

export interface MetricsState {
  bytesOutPerSec: singleValData[];
  isrShrinkPerSec: singleValData[];
  leaderElectionRateAndTimeMS: quartileData[];
  uncleanLeaderElectionsPerSec: quartileData[];
  activeContollerCount: singleValData;
  offlinePartitionCount: singleValData;
  underReplicatedPartitions: singleValData;
  garbageCollectionCount: singleValData;
  createTopics: singleValData[];
  leaderAndIsr: singleValData[];
  listGroups: singleValData[];
  metadata: singleValData[];
  updateMetaData: singleValData[];
  bytesInPerSec: singleValData[];
  fetch: singleValData[];
  produce: singleValData[];
  messagesPerSecond: singleValData[];
  zkRequestLatencyMsCount: singleValData;
  cpuSecondsTotal: singleValData;
  zkRequestLatencyMs: quartileData[];
  codeCache: singleValData;
  heap: singleValData[];
  nonheap: singleValData[];
}

const initialState: MetricsState = {
  bytesOutPerSec: [],
  isrShrinkPerSec: [],
  leaderElectionRateAndTimeMS: [],
  uncleanLeaderElectionsPerSec: [],
  activeContollerCount: [],
  offlinePartitionCount: [],
  underReplicatedPartitions: [],
  garbageCollectionCount: [],
  createTopics: [],
  leaderAndIsr: [],
  listGroups: [],
  metadata: [],
  updateMetaData: [],
  bytesInPerSec: [],
  fetch: [],
  produce: [],
  messagesPerSecond: [],
  zkRequestLatencyMsCount: [],
  cpuSecondsTotal: [],
  zkRequestLatencyMs: [],
  codeCache: [],
  heap: [],
  nonheap: [],
};

export const metricsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case Type.APPEND:
      return {
        ...state,
        [action.metric]: [...state[action.metric], action.payload],
      };

    case Type.UPDATE:
      return {
        ...state,
        [action.metric]: action.payload,
      };

    default:
      return state;
  }
};
