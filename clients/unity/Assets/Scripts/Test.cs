using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Test : MonoBehaviour
{
    public void OnBtnInitClicked()
    {
        SentrySdk.Init();
    }

    public void OnBtnCaptureMessageClicked()
    {
        SentrySdk.CaptureMessage("Hello World!");
    }
}
