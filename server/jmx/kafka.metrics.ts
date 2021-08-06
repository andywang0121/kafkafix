import { Instance, DelayedOperation, RequestVersion } from '../types';

export class KafkaMetrics {
	/**
	 * @name UnderReplicatedPartitions
	 * @MBean name kafka.server: type = ReplicaManager, name = UnderReplicatedPartitions
	 * @desc Number of unreplicated partitions
	 * @metricType Gauge
	 */
	static underReplicatedPartitions = (payload: Instance[]) => {
		return { underReplicatedPartitions: payload[0].value };
	};

	/**
	 * @name IsrShrinksPerSec/IsrExpandsPerSec
	 * @MBean kafka.server:type=ReplicaManager,name=IsrShrinksPerSec
	 * @MBean kafka.server:type=ReplicaManager,name=IsrExpandsPerSec
	 * @desc Rate at which the pool of in-sync replicas (ISRs) shrinks/expands
	 * @metricType Counter
	 */
	// CHECK only shows total: find shrink/expand
	//! TOTAL
	static isrShrinksPerSec = (payload: Instance[]) => {
		return { isrShrinkPerSec: payload[0].value };
	};

	/**
	 * @name ActiveControllerCount
	 * @MBean kafka.controller:type=KafkaController,name=ActiveControllerCount
	 * @desc Number of active controllers in cluster
	 * @metricType Gauge
	 */
	static activeControllerCount = (payload: Instance[]) => {
		return { activeControllerCount: payload[0].value };
	};

	/**
	 * @name OfflinePartitionsCount
	 * @MBean kafka.controller:type=KafkaController,name=OfflinePartitionsCount
	 * @desc Number of offline partitions
	 * @metricType Gauge
	 */
	static offlinePartitionsCount = (payload: Instance[]) => {
		return { offlinePartitionsCount: payload[0].value };
	};

	/**
	 * @name LeaderElectionRateAndTimeMs
	 * @MBean kafka.controller:type=ControllerStats,name=LeaderElectionRateAndTimeMs
	 * @desc Leader election rate and latency
	 * @metricType Gauge
	 */
	static leaderElectionRateAndTimeMs = (payload: any) => {
		return payload;
	};

	/**
	 * @name UncleanLeaderElectionsPerSec
	 * @MBean kafka.controller:type=ControllerStats,name=UncleanLeaderElectionsPerSec
	 * @desc Number of “unclean” elections per second
	 * @metricType Gauge
	 */
	static uncleanLeaderElectionsPerSec = (payload: any) => {
		return payload;
	};

	/**
	 * @name TotalTimeMs
	 * @MBean kafka.network:type=RequestMetrics,name=TotalTimeMs,request={Produce|FetchConsumer|FetchFollower}
	 * @desc Total time (in ms) to serve the specified request (Produce/Fetch)
	 * @metricType Gauge
	 */
	static totalTimeMs = (payload: any) => {
		const fetchConsumer: any[] = [];
		const fetchFollower: any[] = [];
		const produce: any[] = [];

		payload.forEach((data: any) => {
			data.metric.request === 'FetchConsumer' ? fetchConsumer.push(data) : null;
			data.metric.request === 'FetchFollower' ? fetchFollower.push(data) : null;
			data.metric.request === 'Produce' ? produce.push(data) : null;
		});

		return { fetchConsumer, fetchFollower, produce };
	};

	/**
	 * @name PurgatorySize
	 * @MBean kafka.server:type=DelayedOperationPurgatory,name=PurgatorySize,delayedOperation={Produce|Fetch}
	 * @desc Number of requests waiting in producer purgatory/Number of requests waiting in fetch purgatory
	 * @metricType Gauge
	 */
	static purgatorySize = (payload: DelayedOperation[]) => {
		let fetch;
		let produce;

		payload.forEach((data: DelayedOperation) => {
			data.metric.delayedOperation === 'Fetch' ? (fetch = data.value) : null;
			data.metric.delayedOperation === 'Produce'
				? (produce = data.value)
				: null;
		});

		return { fetch, produce };
	};

	/**
	 * @name BytesInPerSec
	 * @MBean kafka.server:type=BrokerTopicMetrics,name={BytesInPerSec}
	 * @desc Aggregate incoming byte rate
	 * @metricType Counter
	 */
	static bytesInPerSec = (payload: Instance[]) => {
		return { bytesInPerSec: payload[0].value };
	};

	/**
	 * @name BytesOutPerSec
	 * @MBean kafka.server:type=BrokerTopicMetrics,name={BytesOutPerSec}
	 * @desc Aggregate joutgoing byte rate
	 * @metricType Counter
	 */
	static bytesOutPerSec = (payload: Instance[]) => {
		return { bytesOutPerSec: payload[0].value };
	};

	/**
	 * @name RequestsPerSecond
	 * @MBean kafka.network:type=RequestMetrics,name=RequestsPerSec,request={createTopics|LeaderAndIsr|ListGroups|Metadata|UpdateMetadata},version={0|1|2|3|…}
	 * @desc Number of (producer|consumer|follower) requests per second
	 * @metricType Counter
	 */
	static requestsPerSecond = (payload: RequestVersion[]) => {
		let createTopics;
		let leaderAndIsr;
		let listGroups;
		let metadata;
		let updateMetadata;

		payload.forEach((data: RequestVersion) => {
			data.metric.request === 'CreateTopics'
				? (createTopics = data.value)
				: null;
			data.metric.request === 'LeaderAndIsr'
				? (leaderAndIsr = data.value)
				: null;
			data.metric.request === 'ListGroups' ? (listGroups = data.value) : null;
			data.metric.request === 'Metadata' ? (metadata = data.value) : null;
			data.metric.request === 'UpdateMetadata'
				? (updateMetadata = data.value)
				: null;
		});

		return { createTopics, leaderAndIsr, listGroups, metadata, updateMetadata };
	};

	/**
	 * @name MessagesPerSecond
	 * @MBean kafka.server,type=BrokerTopicMetrics,name=MessageInPerSec
	 * @desc Number of message requests per second
	 * @metricType Counter
	 */
	static messagesPerSecond = (payload: Instance[]) => {
		return { messagesPerSecond: payload[0].value };
	};
}
