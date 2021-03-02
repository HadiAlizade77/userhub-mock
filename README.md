 ## Usage
 * You can use this tool to login with full access to atlaan tools in LOCAL Environment 
 * simply run
 
 <pre>
node app
</pre>


Possible hierarchies values:

1. AB => Annual Budget
2. BA => Budget Allocation
3. SP => Strategic Planning
4. CP => Campaign Planning
5. MP => Media Planning

```
{
     "code": "MP",
     "name": "Media Planning"
}
```

Please note that the ```code``` parameter is mandatory and do not change the 
codes abbreviations!

Possible role values

1. am-approver => all permissions are granted
2. am-editor => only view, edit, comment are granted
3. am-reviewer => only view and comment permission is granted

By the way, the sample response is embedded in the sample1.json and sample2.json files.
