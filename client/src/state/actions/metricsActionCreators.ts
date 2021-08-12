import { Type } from '../constants/metricsConstants';
import { singleValData, quartileData } from '../reducers/metricsDataReducer';

export interface Action {
  type: number;
  payload?: any;
}

export const bytesOutPerSecMetricsCreator = (data: singleValData): Action => {
  return {
    type: Type.APPEND_BYTES_OUT_PER_SEC,
    payload: data,
  };
};

export const isrShrinkPerSecMetricsActionCreator = (
  data: singleValData
): Action => {
  return {
    type: Type.APPEND_ISR_SHRINK_PER_SEC,
    payload: data,
  };
};

export const leaderElectionRateAndTimeMSMetricsActionCreator = (
  data: quartileData
): Action => {
  return {
    type: Type.APPEND_LEADER_ELECTION_RATE_AND_TIME_MS,
    payload: data,
  };
};

export const uncleanLeaderElectionsPerSecMetricsActionCreator = (
  data: quartileData
): Action => {
  return {
    type: Type.APPEND_UNCLEAN_LEADER_ELECTIONS_PER_SEC,
    payload: data,
  };
};

export const activeControllerCountMetricsActionCreator = (
  data: singleValData
): Action => {
  return {
    type: Type.UPDATE_ACTIVE_CONTROLLER_COUNT,
    payload: data,
  };
};

export const offlinePartitionCountMetricsActionCreator = (
  data: singleValData
): Action => {
  return {
    type: Type.UPDATE_OFFLINE_PARTITION_COUNT,
    payload: data,
  };
};

export const underReplicatedPartitionsMetricsActionCreator = (
  data: singleValData
): Action => {
  return {
    type: Type.UPDATE_UNDER_REPLICATED_PARTITIONS,
    payload: data,
  };
};

export const garbageCollectionCountMetricsActionCreator = (
  data: singleValData
): Action => {
  return {
    type: Type.UPDATE_GARBAGE_COLLECTION_COUNT,
    payload: data,
  };
};

export const createTopicsMetricsActionCreator = (
  data: singleValData
): Action => {
  return {
    type: Type.APPEND_CREATE_TOPICS,
    payload: data,
  };
};

export const leaderAndIsrMetricsActionCreator = (
  data: singleValData
): Action => {
  return {
    type: Type.APPEND_LEADER_AND_ISR,
    payload: data,
  };
};

export const listGroupMetricsActionCreator = (data: singleValData): Action => {
  return {
    type: Type.APPEND_LIST_GROUPS,
    payload: data,
  };
};

export const metadataMetricsActionCreator = (data: singleValData): Action => {
  return {
    type: Type.APPEND_METADATA,
    payload: data,
  };
};

export const updateMetaDataMetricsActionCreator = (
  data: singleValData
): Action => {
  return {
    type: Type.APPEND_UPDATE_METADATA,
    payload: data,
  };
};

export const bytesInPerSecMetricsActionCreator = (
  data: singleValData
): Action => {
  return {
    type: Type.APPEND_BYTES_IN_PER_SEC,
    payload: data,
  };
};

export const fetchMetricsActionCreator = (data: singleValData): Action => {
  return {
    type: Type.APPEND_FETCH,
    payload: data,
  };
};

export const produceMetricsActionCreator = (data: singleValData): Action => {
  return {
    type: Type.APPEND_PRODUCE,
    payload: data,
  };
};

export const messagesPerSecondMetricsActionCreator = (
  data: singleValData
): Action => {
  return {
    type: Type.APPEND_MESSAGES_PER_SECOND,
    payload: data,
  };
};

export const zkRequestLatencyMsCountMetricsActionCreator = (
  data: singleValData
): Action => {
  return {
    type: Type.UPDATE_ZK_REQUEST_LATENCY_MS_COUNT,
    payload: data,
  };
};

export const cpuSecondsTotalMetricsActionCreator = (
  data: singleValData
): Action => {
  return {
    type: Type.UPDATE_CPU_SECONDS_TOTAL,
    payload: data,
  };
};

export const zkRequestLatencyMsMetricsActionCreator = (
  data: quartileData
): Action => {
  return {
    type: Type.APPEND_ZK_REQUEST_LATENCY_MS,
    payload: data,
  };
};

export const codeCacheMetricsActionCreator = (data: singleValData): Action => {
  return {
    type: Type.UPDATE_CODE_CACHE,
    payload: data,
  };
};

export const heapMetricsActionCreator = (data: singleValData): Action => {
  return {
    type: Type.APPEND_HEAP,
    payload: data,
  };
};

export const nonheapMetricsActionCreator = (data: singleValData): Action => {
  return {
    type: Type.APPEND_NONHEAP,
    payload: data,
  };
};
