import os
import sys

try:
    from moviepy.editor import VideoFileClip, AudioFileClip
except ImportError:
    print("Error: moviepy library not found.")
    print("Please install it using: pip install moviepy")
    sys.exit(1)

def join_audio_video(video_path, audio_path, output_path):
    """
    Merges an audio file into a video file.
    If the video already has audio, it will be replaced.
    """
    if not os.path.exists(video_path):
        print(f"Error: Video file not found at {video_path}")
        return
    
    if not os.path.exists(audio_path):
        print(f"Error: Audio file not found at {audio_path}")
        return

    try:
        print(f"Loading video: {video_path}")
        video = VideoFileClip(video_path)
        
        print(f"Loading audio: {audio_path}")
        audio = AudioFileClip(audio_path)
        
        # Ensure audio doesn't exceed video duration (optional)
        if audio.duration > video.duration:
            print("Warning: Audio is longer than video. Trimming audio.")
            audio = audio.subclip(0, video.duration)
        
        print("Merging tracks...")
        final_video = video.set_audio(audio)
        
        print(f"Writing output to: {output_path}")
        # Using codec 'libx264' for video and 'aac' for audio as they are widely compatible
        final_video.write_videofile(output_path, codec='libx264', audio_codec='aac')
        
        print("Done!")
        
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    # Example usage:
    # Change these paths to your actual files
    VIDEO_FILE = "input_video.mp4" 
    AUDIO_FILE = "input_audio.mp3"
    OUTPUT_FILE = "final_output.mp4"

    print("--- Pico Video Joiner ---")
    
    # You can also use command line arguments:
    # python video_joiner.py my_video.mp4 my_audio.mp3
    if len(sys.argv) > 2:
        v_path = sys.argv[1]
        a_path = sys.argv[2]
        o_path = sys.argv[3] if len(sys.argv) > 3 else "output_" + v_path
        join_audio_video(v_path, a_path, o_path)
    else:
        print("Usage: python video_joiner.py <video_file> <audio_file> [output_file]")
        print("\nAlternatively, edit the script variables VIDEO_FILE and AUDIO_FILE.")
