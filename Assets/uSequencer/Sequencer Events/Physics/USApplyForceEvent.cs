using UnityEngine;
using System.Collections;

[USequencerFriendlyName("Apply Force")]
[USequencerEvent("Physics/Apply Force")]
public class USApplyForceEvent : USEventBase {
	public Vector3 direction = Vector3.up;
	
	public float strength = 1.0f;
	public ForceMode type = ForceMode.Impulse;
	
	private Transform previousTransform = null;
	
	public override void FireEvent()
	{	
		Rigidbody affectedBody = AffectedObject.GetComponent<Rigidbody>();
		if(!affectedBody)
		{
			Debug.Log("Attempting to apply an impulse to an object, but it has no rigid body from USequencerApplyImpulseEvent::FireEvent");
			return;
		}
		
		affectedBody.AddForceAtPosition(direction * strength, transform.position, type);
		previousTransform = affectedBody.transform;
	}
	
	public override void ProcessEvent(float deltaTime)
	{
		
	}
	
	public override void StopEvent()
	{
		UndoEvent();
	}
	
	public override void UndoEvent()
	{
		if(!AffectedObject)
			return;
		
		Rigidbody affectedBody = AffectedObject.GetComponent<Rigidbody>();
		if(!affectedBody)
			return;
		
		affectedBody.Sleep();
		if(previousTransform)
		{
			AffectedObject.transform.position = previousTransform.position;
			AffectedObject.transform.rotation = previousTransform.rotation;
		}
	}
}
