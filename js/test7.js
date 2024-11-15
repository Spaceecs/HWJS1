const fileSizeMB = 820;
let fleshGB = prompt("Enter Flesh drive GB")
fleshGB = parseFloat(fleshGB)
let fileCount = 0
let fleshMB = fleshGB*1024
while(fleshMB>=fileSizeMB)
{
    fleshMB-=fileSizeMB
    fileCount++
}
alert(`Result = ${fileCount}`)