using UnityEngine;
using System.Collections;

[USequencerFriendlyName("Play Audio")]
[USequencerEvent("Audio/Play Audio")]
public class USPlayAudioEvent : USEventBase {
    public AudioClip audioClip = null;
	public bool loop = false;

	private bool wasPlaying = false;

	public void Update()
	{
		if (!loop && audioClip)
			Duration = audioClip.length;
		else
			Duration = -1;
	}

	public override void FireEvent()
    {
        AudioSource audio = AffectedObject.GetComponent<AudioSource>();
        if (!audio) 
		{
            audio = AffectedObject.AddComponent<AudioSource>();
			audio.playOnAwake = false;
		}
		
		if(audio.clip != audioClip)
			audio.clip = audioClip;
	
		audio.time = 0.0f;
		audio.loop = loop;
		audio.Play();
	}
	
	public override void ProcessEvent(float deltaTime)
	{
		AudioSource audio = AffectedObject.GetComponent<AudioSource>();
        if (!audio) 
		{
            audio = AffectedObject.AddComponent<AudioSource>();
			audio.playOnAwake = false;
		}
		
		if(audio.clip != audioClip)
			audio.clip = audioClip;
		
		if(audio.isPlaying)
			return;
		
		audio.time = deltaTime;
		
		if(Sequence.IsPlaying)
		{	
			audio.Play();
		}
	}
	
	public override void ManuallySetTime(float deltaTime)
	{
		AudioSource audio = AffectedObject.GetComponent<AudioSource>();
		if(!audio)
			return;
		
		audio.time = deltaTime;
	}
	
	public override void ResumeEvent()
	{
        AudioSource audio = AffectedObject.GetComponent<AudioSource>();
		if (!audio)
			return;
		
		audio.time = Sequence.RunningTime - Firetime;
		
		if(wasPlaying)
			audio.Play();
	}
	
	public override void PauseEvent() 
	{
		AudioSource audio = AffectedObject.GetComponent<AudioSource>();

		wasPlaying = false;
		if (audio && audio.isPlaying)
			wasPlaying = true;

        if (audio)
			audio.Pause();
	}
	
	public override void StopEvent()
	{
		if(!AffectedObject)
			return;
		
        AudioSource audio = AffectedObject.GetComponent<AudioSource>();
        if (audio)
			audio.Stop();
	}
	
	public override void UndoEvent()
	{
		if(!AffectedObject)
			return;
		
        AudioSource audio = AffectedObject.GetComponent<AudioSource>();
        if (audio)
			audio.Stop();
	}
}
